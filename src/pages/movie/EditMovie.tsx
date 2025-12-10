import { NavLink, useNavigate, useParams } from "react-router";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useCallback, useEffect, useState, type ChangeEvent } from "react";
import apiClient from "../../utils/ApiClient";

interface FormMovie {
    judul: string,
    tahunRilis: string,
    sutradara: string
}

    interface ResponseData {
        data: {
            _id: string,
             judul: string,
             tahunRilis: string,
             sutradara: string,
             createdBy: string,
             createdAt: string,
             updatedAt: string,
             __v : string
        },
        message : string
    }

    function EditMovie() {
    const params= useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState<FormMovie>({
        judul: "",
        tahunRilis: "",
        sutradara: ""
    })

    const fetchMovie = useCallback (async () => {
        const response = await apiClient.get(`/movie/${params.id}`);

        if(response.status === 200){
            const responseData : ResponseData = response.data;
            setForm({
                judul: responseData.data.judul,
                tahunRilis: responseData.data.tahunRilis,
                sutradara: responseData.data.sutradara
            })
        }

     }, [params])

    const handleInputChange = (event : ChangeEvent <HTMLInputElement>) => {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await apiClient.put(`/movie/${params.id}`, form);
            console.log(response);

            navigate("/movie", {
                replace: true
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMovie();
    }, [fetchMovie]);

return <div className="container mt-auto">
    <div className="d-flex justify-content-between mb-3">
    <h2>AddMovie Page</h2>
    <NavLink to = "/movie" className="btn btn-danger">Back to Movie</NavLink>
    </div>

    <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formJudul">
                <Form.Label>Judul</Form.Label>
                <Form.Control 
                value={form.judul}
                onChange={handleInputChange}
                name="judul" 
                type="text" 
                placeholder="Judul Film" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formTahunRilis">
                <Form.Label>Tahun Rilis</Form.Label>
                <Form.Control 
                value={form.tahunRilis}
                onChange={handleInputChange}
                name="tahunRilis" 
                type="text" 
                placeholder="Tahun Rilis Film" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSutradara">
                <Form.Label>Sutradara</Form.Label>
                <Form.Control 
                value={form.sutradara}
                onChange={handleInputChange}
                name="sutradara" 
                type="text" 
                placeholder="Sutradara Film" />
            </Form.Group>

            <Button type="submit" variant="primary">Simpan</Button>
        </Form>
    </div>
    </div>
}

export default EditMovie