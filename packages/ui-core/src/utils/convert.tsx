import React from 'react';
import convert from 'htmr';

type AttrName = string;

type PropName = string;

type ConfigItemPropsType = string[] | Record<AttrName, PropName>;

type TransformConfigItem = {
    component: React.ElementType;
    props?: ConfigItemPropsType;
    customProps?: Record<string, any>;
};

export type TransformConfig = {
    [key: string]: TransformConfigItem;
};

type NodeType = keyof React.ReactHTML | keyof React.ReactSVG | string;

type TransformPropsType = Record<string, string>;

const getTransform = (config: TransformConfig) => {
    return {
        _: (node: NodeType, nodeProps?: TransformPropsType, children?: React.ReactNode) => {
            // text node
            if (!nodeProps) {
                return node;
            }

            const reactElement = config[node];

            if (!reactElement) {
                return null;
            }

            const { component: Component, props, customProps } = reactElement;
            const { className: nodePropsClass, key } = nodeProps;
            const filteredProps: Record<string, any> = {
                ...customProps,
                key,
            };

            // Используется toLowerCase(), чтоб оставалась возможность использовать пропсы в camelCase формате,
            // по умолчанию htmr приводит их к kebab-case
            const isProp = (prop: string) => nodeProps[prop.toLowerCase()] !== undefined;

            if (nodePropsClass) {
                filteredProps.hasOwnProperty('className')
                    ? filteredProps.className += ` ${nodePropsClass}`
                    : filteredProps.className = nodePropsClass;
            }

            if (Array.isArray(props)) {
                props.forEach(prop => {
                    if (isProp(prop)) {
                        filteredProps[prop] = nodeProps[prop.toLowerCase()];
                    }
                });
            }

            if (props && Object.keys(props).length) {
                Object.keys(props).forEach(prop => {
                    if (isProp(prop)) {
                        filteredProps[props[prop]] = nodeProps[prop.toLowerCase()];
                    }
                });
            }

            return <Component {...filteredProps}>{children}</Component>;
        },
    };
};

/**
 * Расширение библиотеки htmr для возможности замены html-тегов собственными компонентами, распознавания пропсов
 * компонентов и html-атрибутов
 * @param {String} html - не обработанный html
 * @param {TransformConfig} config - объект, ключом которого является html-тег, значением - конфиг для обработки
 * html-тега
 * @param {TransformConfigItem} config[key] - конфиг для обработки html-тега
 * @param {React.ElementType} config[key].component - компонент, который будет использоваться вместо html-тега
 * @param {ConfigItemPropsType} config[key].props - массив разрешенных пропсов или объект соответствия html-атрибутов
 * пропсам компонента
 * @param {Record<string, any>} config[key].customProps - список дополнительных заданных пропсов
 */
const convertToReact = (html: string, config: TransformConfig): React.ReactNode[] => {
    let nodes = convert(html, {
        preserveAttributes: [],
        dangerouslySetChildren: [],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        transform: getTransform(config),
    });

    if (!Array.isArray(nodes)) {
        nodes = [nodes];
    }

    return (nodes as React.ReactNode[]).filter(node => !!node);
};

export default convertToReact;
