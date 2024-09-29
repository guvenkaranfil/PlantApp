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

export interface Plant {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  rank: number;
  image: {
    url: string;
  };
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface CategoriesResponse {
  data: Plant[];
  meta: Meta;
}

export const fetchCategories = async (): Promise<CategoriesResponse> => {
  try {
    const response = await fetch(
      'https://dummy-api-jtg6bessta-ey.a.run.app/getCategories',
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Couldn't fetch categories");
  }
};
