export interface GetStartedQuestion {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
}
export const fetchGetStartedQuestions = async (): Promise<
  Error | GetStartedQuestion[]
> => {
  try {
    const response = await fetch(
      'https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions',
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return new Error("Couldn't fetch Get started questions");
  }
};
