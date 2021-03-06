import React from 'react';
import style from './default-sections.scss';
import uuid from 'uuid';

const References = ({ references }) =>
    references.length > 0 && (
        <div className={style['resume-references']}>
            <h3>References</h3>
            <ul className={style['resume-references--references']}>
                {references.map((ref) => {
                    if (ref.enabled) {
                        const { name, reference } = ref.value;
                        return (
                            <li key={uuid()}>
                                {name && name.enabled && (
                                    <p className={style['resume-references--name']}>
                                        {name.value}
                                    </p>
                                )}
                                {reference && reference.enabled && <p>{reference.value}</p>}
                            </li>
                        );
                    }

                    return null;
                })}
            </ul>
        </div>
    );

export default References;
