import React, { useState } from 'react';
import { Checkbox, Box, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';
import { useAuth } from '../hooks/AuthProvider';

const Feedback = () => {
    const apiUrl = import.meta.env.VITE_API_URL
    const [formData, setFormData] = useState({ title: '', content: '' });
    const auth = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(apiUrl + '/feedback/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${auth.token}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Data added successfully');
            } else {
                console.error('Error adding data:', await response.text());
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Box as="form" onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="content">Content</FormLabel>
                <Input
                    id="content"
                    name="content"
                    type="text"
                    value={formData.content}
                    onChange={handleChange}
                />
            </FormControl>

            <Button type="submit">Add Data</Button>
        </Box>
    );
};

export default Feedback;
