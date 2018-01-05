export default function graphql(url: any, {headers, method, token, query, mutation}: {
    headers?: {};
    method?: string;
    token?: string;
    query?: string;
    mutation?: string;
}): Promise<void>;
