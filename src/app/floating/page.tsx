'use client';
import { useFloating, useInteractions, useTypeahead, FloatingTree } from '@floating-ui/react';
import { useRef, useState } from 'react';

export default function Page(prop) {
    return (
        <div>
            <Typeahead />
        </div>
    )
}


function Typeahead() {
    const [activeIndex, setActiveIndex] = useState(null);

    const { refs, floatingStyles, context } = useFloating({
        open: true,
    });

    const items = ['one', 'two', 'three'];

    const listRef = useRef(items);

    const typeahead = useTypeahead(context, {
        listRef,
        activeIndex,
        onMatch: setActiveIndex,
    });

    const { getReferenceProps, getFloatingProps, getItemProps } =
        useInteractions([typeahead]);

    return (
        <>
            <div ref={refs.setReference} {...getReferenceProps()}>
                Reference element
            </div>
            <div
                ref={refs.setFloating}
                style={floatingStyles}
                {...getFloatingProps()}
            >
                {items.map((item, index) => (
                    <div
                        key={item}
                        // Make these elements focusable using a roving tabIndex.
                        tabIndex={activeIndex === index ? 0 : -1}
                        {...getItemProps()}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <FloatingTree>
                1
            </FloatingTree>
        </>
    );
}