import React from 'react';
import BoxComponent from './BoxComponent';
import './Box.css';

const BoxList = ({ numbers }) => {

    const box = numbers.map((row, i) => {
        let count = 0; // count the number of elements in each row
        let className = "row";
        if (i === 2 || i === 5 || i === 8) {
            className = "row thirdRow"; // Every third row needs to have a larger gap
        }
        return (
            <div className={className}>
                {
                    row.map((item, j) => {
                        const id = i * 9 + j;
                        if (j === count) { // Every third column needs to have a larger gap
                            count += 3;
                            return (
                                <div style={{marginLeft: '4px'}}>
                                    <BoxComponent value={item} id={id} />
                                </div>
                            );
                        } else {
                            return (
                                <div style={{marginLeft: '2px'}}>
                                    <BoxComponent value={item} id={id} />
                                </div>
                            );
                        }
                    })
                }
            </div>
        );
    });

    return (
        <div className="column">
            { box }
        </div>
    );

}

export default BoxList;