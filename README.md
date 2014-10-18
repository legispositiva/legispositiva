# Legispositiva

This is the bit you should read


# Proposed Schema

Document

```json
{
    "_id": String,
    "documentId": String,
    "timestamp": ISODate,
    "articles": [ArticleId],

}
```

Article

```json
{
    "_id": String,
    "articleId": String,
    "timestamp": ISODate,
    "sections": [SectionId],
}
```

Section

```json
{
    "_id": String,
    "SectionId": Urn,
    "timestamp": ISODate,
    "content": String
}
```
