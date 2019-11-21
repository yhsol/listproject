const axios = require("axios");

const getBreeds = async () => {
  try {
    return await axios.get("https://dog.ceo/api/breeds/list/all");
  } catch (error) {
    console.log(error);
  }
};

const countBreeds = async () => {
  const breeds = await getBreeds();

  if (breeds.data.message) {
    console.log(
      `현재 강아지의 수는 ${Object.entries(breeds.data.message).length}입니다.`
    );
  }
};

countBreeds();
