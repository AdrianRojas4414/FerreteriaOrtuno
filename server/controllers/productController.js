class productController{
    constructor(){}

    //async methods because they await a response

    async createProduct(req, resp){
        try{
            resp.status(201).json({status:'create_ok'});
        }catch(e){
            resp.status(500).send(e);
        }

    }

    async updateProduct(req, resp){
        try{
            resp.status(201).json({status:'update_ok'});
        }catch(e){
            resp.status(500).send(e);
        }

    }

    async deleteProduct(req, resp){
        try{
            resp.status(201).json({status:'delete_ok'});
        }catch(e){
            resp.status(500).send(e);
        }

    }

    async getAllProducts(req, resp){
        try{
            resp.status(201).json({status:'getAll_ok'});
        }catch(e){
            resp.status(500).send(e);
        }

    }

    async getProduct(req, resp){
        try{
            resp.status(201).json({status:'get_ok'});
        }catch(e){
            resp.status(500).send(e);
        }

    }
}

//export the controller already constructed for quick usage
export default new productController();