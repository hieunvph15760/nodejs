import Contact from '../models/contact';

export const create = async(req,res) =>{
    try {
        const contact = await new Contact(req.body).save();
        res.json(contact);
    } catch (error) {
        res.status(400).json({
            error:"Không thêm được !"
        })
    }
}

export const getAll = async (req,res) =>{
    try {
        const contact = await Contact.find({}).exec();
        res.json(contact);
    } catch (error) {
        res.status(400).json({
            error:"Không lấy được contact !"
        })
    }
}

export const remove = async (req,res) =>{
    try {
        const contact = await Contact.findOneAndDelete({_id:req.params.id}).exec();
        res.json(contact);
    } catch (error) {
        res.status(400).json({
            error:"Xóa không thành công !"
        })
    }
}