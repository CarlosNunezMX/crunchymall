import { Response } from "./Common.js"

type FeautreMatrix = {
    name: 'feature_matrix',
    view_count_between_upsell: 1
}

export type ClientOptionsItem = FeautreMatrix
export type ClientOptionsResponse = Response<ClientOptionsItem[]>