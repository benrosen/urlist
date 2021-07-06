#!/bin/sh
(
    echo "# THIS FILE IS AUTO GENERATED AND WILL BE OVERWRITTEN" \
    && cat src/schema/*.gql
) > src/schema/schema.graphql