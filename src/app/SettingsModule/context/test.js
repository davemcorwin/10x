/* istanbul ignore file */

const testData = {
  "title": "10x.gsa.gov",
  "description": "Test site description",
  "customFields": [
    {
      "key": "test1",
      "value": "test test"
    }
  ]
};

export const getSettings = async (props) => {
  if (props.error) {
    throw new Error("Invalid Props.");
  }

  return testData;
};
