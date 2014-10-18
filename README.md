# Legispositiva

This is the bit you should read


# Proposed Schema

Document

```
{
    "_id": ObjectID,
    "documentId": String,
    "timestamp": ISODate,
    "articles": [ArticleId],
    "ammends": ObjectID        // -> DocumentID
}
```

Article

```
{
    "_id": ObjectID,
    "articleId": String,
    "timestamp": ISODate,
    "sections": [SectionId],
    "ammends": ObjectID         // -> ArticleID
}
```

Section

```
{
    "_id": ObjectID,
    "sectionId": String,
    "timestamp": ISODate,
    "content": String,
    "ammends": ObjectID        // -> SectionID
}
```

User

```
{
    "_id": String,
    "username": String,
    "pass": String
}
```

Comment

```
{}
```
