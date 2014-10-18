# Legispositiva

This is the bit you should read


# Proposed Schema

Document

```json
{
    "_id": ObjectID,
    "documentId": String,
    "timestamp": ISODate,
    "articles": [ArticleId],
    "ammends": ObjectID // DocumentID
}
```

Article

```json
{
    "_id": ObjectID,
    "articleId": String,
    "timestamp": ISODate,
    "sections": [SectionId],
    "ammends": ObjectID // ArticleID
}
```

Section

```json
{
    "_id": ObjectID,
    "sectionId": String,
    "timestamp": ISODate,
    "content": String,
    "ammends": ObjectID // SectionID
}
```

Comment

```json
{}
```
