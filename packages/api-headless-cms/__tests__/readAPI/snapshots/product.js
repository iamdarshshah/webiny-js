export default /* GraphQL */ `
    "Products being sold in our webshop"
    type Product {
        id: ID
        createdBy: SecurityUser
        updatedBy: SecurityUser
        createdOn: DateTime
        updatedOn: DateTime
        savedOn: DateTime
        title(locale: String): String
        category(locale: String): Category
        reviews(
            locale: String
            page: Int
            perPage: Int
            where: ReviewListWhereInput
            sort: [ReviewListSorter]
        ): ReviewListResponse
        price(locale: String): Float
        inStock(locale: String): Boolean
        itemsInStock(locale: String): Int
        availableOn(locale: String): String
    }

    input ProductGetWhereInput {
        id: ID!
    }

    input ProductListWhereInput {
        id: ID
        id_not: ID
        id_in: [ID]
        id_not_in: [ID]

        # Matches if the field is equal to the given value
        title: String

        # Matches if the field is not equal to the given value
        title_not: String

        # Matches if the field value equal one of the given values
        title_in: [String]

        # Matches if the field value does not equal any of the given values
        title_not_in: [String]

        # Matches if given value is a substring of the the field value
        title_contains: String

        # Matches if given value is not a substring of the the field value
        title_not_contains: String

        # Matches if the field is equal to the given value
        price: Float

        # Matches if the field is not equal to the given value
        price_not: Float

        # Matches if the field value equal one of the given values
        price_in: [Float]

        # Matches if the field value does not equal any of the given values
        price_not_in: [Float]

        # Matches if the field value is strictly smaller than the given value
        price_lt: Float

        # Matches if the field value is smaller than or equal to the given value
        price_lte: Float

        # Matches if the field value is strictly greater than the given value
        price_gt: Float

        # Matches if the field value is greater than or equal to the given value
        price_gte: Float

        # Matches if the field is equal to the given value
        inStock: Boolean

        # Matches if the field is not equal to the given value
        inStock_not: Boolean

        # Matches if the field is equal to the given value
        itemsInStock: Int

        # Matches if the field is not equal to the given value
        itemsInStock_not: Int

        # Matches if the field value equal one of the given values
        itemsInStock_in: [Int]

        # Matches if the field value does not equal any of the given values
        itemsInStock_not_in: [Int]

        # Matches if the field value is strictly smaller than the given value
        itemsInStock_lt: Int

        # Matches if the field value is smaller than or equal to the given value
        itemsInStock_lte: Int

        # Matches if the field value is strictly greater than the given value
        itemsInStock_gt: Int

        # Matches if the field value is greater than or equal to the given value
        itemsInStock_gte: Int

        # Matches if the field is equal to the given value
        availableOn: String

        # Matches if the field is not equal to the given value
        availableOn_not: String

        # Matches if the field value equal one of the given values
        availableOn_in: [String]

        # Matches if the field value does not equal any of the given values
        availableOn_not_in: [String]

        # Matches if the field value is strictly smaller than the given value
        availableOn_lt: String

        # Matches if the field value is smaller than or equal to the given value
        availableOn_lte: String

        # Matches if the field value is strictly greater than the given value
        availableOn_gt: String

        # Matches if the field value is greater than or equal to the given value
        availableOn_gte: String
    }

    enum ProductListSorter {
        createdOn_ASC
        createdOn_DESC
        updatedOn_ASC
        updatedOn_DESC
        title_ASC
        title_DESC
        price_ASC
        price_DESC
        inStock_ASC
        inStock_DESC
        itemsInStock_ASC
        itemsInStock_DESC
        availableOn_ASC
        availableOn_DESC
    }

    type ProductResponse {
        data: Product
        error: CmsError
    }

    type ProductListResponse {
        data: [Product]
        meta: CmsListMeta
        error: CmsError
    }

    extend type Query {
        getProduct(locale: String, where: ProductGetWhereInput!): ProductResponse

        listProducts(
            locale: String
            page: Int
            perPage: Int
            where: ProductListWhereInput
            sort: [ProductListSorter]
        ): ProductListResponse
    }
`;
