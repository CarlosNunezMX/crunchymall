import { Router } from "express";
export const ClientOptionsRouter = Router();

ClientOptionsRouter.post('/', (req, res) => {
    return res.json({
        data: [
            {
                name: 'feature_matrix',
                view_count_between_upsell: 1
            },
            
        ]
    })
})