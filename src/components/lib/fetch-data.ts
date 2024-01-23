export const fetchFixtures = async (url : string) => {
  try {
    const response = await fetch(`https://api.football-data.org/v4${url}`);
    const result = await response.json();
    console.log(result);

    return {
      response: response,
      result: result,
    };
  } catch (error) {
    console.error(error);
    return {
      error: error,
    };
  }
};
