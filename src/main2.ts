type ID = string
type PopularTag = string;
type MaybePopularTag = PopularTag | null;


interface UserInterface {
    id: ID,
    name: string,
    surname: string,
}

const popularTags: PopularTag[] = ["dragon", "coffe"]

const dragonsTag: MaybePopularTag = null;

let username: string = "alex";

let pageName: string | number = "1";

let errorMessage: string | null = null;

let user3: UserInterface | null = null;

let someProb: string | number | null | undefined | string | object
