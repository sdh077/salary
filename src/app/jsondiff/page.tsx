'use client'
import { useState } from 'react';

const JSONCompare = () => {
  const [json1, setJSON1] = useState({ key1: 'value1', key2: 'value2' });
  const [json2, setJSON2] = useState({ key1: 'value1', key2: 'value2' });
  const [isEqual, setIsEqual] = useState(false);
  const str1 = JSON.stringify(json1, null, 4).split('\n')
  const compareJSON = () => {
    const stringifiedJSON1 = JSON.stringify(json1, null, 4);
    const stringifiedJSON2 = JSON.stringify(json2, null, 4);


    // JSON 문자열 비교
    if (stringifiedJSON1 === stringifiedJSON2) {
      setIsEqual(true);
    } else {
      setIsEqual(false);
    }
  };

  return (
    <div>
      <h2>JSON Comparison</h2>
      <div>
        <h3>JSON 1:</h3>
        {str1.map((str, key) =>
          <pre key={key}>{str}</pre>
        )}
        <pre>{JSON.stringify(json1, null, 2)}</pre>
      </div>
      <div>
        <h3>JSON 2:</h3>
        <pre>{JSON.stringify(json2, null, 2)}</pre>
      </div>
      <button onClick={compareJSON}>Compare JSON</button>
      <div>
        <h3>Result:</h3>
        {isEqual ? <p>JSON objects are equal</p> : <p>JSON objects are not equal</p>}
      </div>
    </div>
  );
};

export default JSONCompare;