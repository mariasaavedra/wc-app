import { updateContact, addContact } from "../../../lib/apiClient";

const handler = async (req, res) => {

    const payload = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        MobilePhone: req.body.MobilePhone,
        Birthdate: req.body.Birthdate,
    }

    const Id = req.body.Id;

    if (req.method === 'PATCH'){
        const updatedContact = await updateContact(Id, payload);
        res.status(201).json({message: 'Success'});
    }

    if(req.method === "POST"){
        const updatedContact = await addContact(payload);
        res.status(201).json({message:'Success'});
    }


}
export default handler;