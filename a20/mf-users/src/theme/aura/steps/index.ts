import type { StepsDesignTokens, StepsTokenSections } from '@primeuix/themes/types/steps';

export const root: StepsTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const separator: StepsTokenSections.Separator = {
    background: '{content.border.color}'
};

export const itemLink: StepsTokenSections.ItemLink = {
    borderRadius: '{content.border.radius}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    },
    gap: '0.5rem'
};

export const itemLabel: StepsTokenSections.ItemLabel = {
    color: '{text.muted.color}',
    activeColor: '{primary.color}',
    fontWeight: '500'
};

export const itemNumber: StepsTokenSections.ItemNumber = {
    background: '{content.background}',
    activeBackground: '{content.background}',
    borderColor: '{content.border.color}',
    activeBorderColor: '{content.border.color}',
    color: '{text.muted.color}',
    activeColor: '{primary.color}',
    size: '2rem',
    fontSize: '1.143rem',
    fontWeight: '500',
    borderRadius: '50%',
    shadow: '0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)'
};

export default {
    root,
    separator,
    itemLink,
    itemLabel,
    itemNumber
} satisfies StepsDesignTokens;
