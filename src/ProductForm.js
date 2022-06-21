import React, { useReducer} from 'react'
import { Form, Button } from 'react-bootstrap'
import myaxios from './myaxios'
import { useNavigate } from 'react-router-dom';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'ATUALIZA':
            return {
                ...state,
                [action.name]: action.value
            }
        default:
            return state;
    }
}


const ProductForm = () => {
    const initialState = { description: "", price: "", productImage: "" }
    const [formState, dispatch] = useReducer(formReducer, initialState);
    const handleChange = (e) => {
        dispatch({
            type: 'ATUALIZA',
            name: e.target.name,
            value: e.target.value
        })
    }

    const navigate = useNavigate();

    const submitForm = async(e) => {
        try {
            await myaxios.post("/evento", formState)
            alert("Dados enviados com sucesso");
        } catch (err) {
            navigate("/home")
        }
    }

    return (
        <div>
            <Form>
                <div className="form-group">
                    <label for="description">Descrição</label>
                    <input type="text" onChange={handleChange}
                        className="form-control" name="description" id="description" aria-describedby="helpId" placeholder=""
                        value={formState.description} />
                    <small id="helpId" className="form-text text-muted">Adicione uma descrição</small>
                </div>

                <div className="form-group">
                    <label for="price">Preço</label>
                    <input type="text" onChange={handleChange}
                        className="form-control" name="price" id="price" aria-describedby="helpId" placeholder=""
                        value={formState.price} />
                    <small id="helpId" className="form-text text-muted">Defina o preço</small>
                </div>

                <div className="form-group">
                    <label for="productImage">Imagem</label>
                    <input type="text" onChange={handleChange}
                        className="form-control" name="productImage" id="productImage" aria-describedby="helpId" placeholder=""
                        value={formState.productImage} />
                    <small id="helpId" className="form-text text-muted">Insira uma imagem</small>
                </div>

                <Button variant="primary" onClick={submitForm} type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default ProductForm