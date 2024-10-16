/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Time: { input: any; output: any; }
};

export type NewVisitHistory = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};

export type VisitHistoryFragmentFragment = { __typename?: 'VisitHistory', id: string, title: string, latitude: number, longitude: number, createdAt: any, updatedAt: any } & { ' $fragmentName'?: 'VisitHistoryFragmentFragment' };

export type SampleQueryVariables = Exact<{ [key: string]: never; }>;


export type SampleQuery = { __typename?: 'Query', visitHistories: Array<(
    { __typename?: 'VisitHistory' }
    & { ' $fragmentRefs'?: { 'VisitHistoryFragmentFragment': VisitHistoryFragmentFragment } }
  )> };

export const VisitHistoryFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VisitHistoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VisitHistory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<VisitHistoryFragmentFragment, unknown>;
export const SampleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"sample"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"visitHistories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VisitHistoryFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VisitHistoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VisitHistory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<SampleQuery, SampleQueryVariables>;