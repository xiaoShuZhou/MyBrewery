import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Box, Typography } from '@mui/material';

import { Form } from '../misc/type';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>({
    mode: 'onChange', // Validation will trigger on the change event with each input, and lead to a better user experience.
  });

  const onSubmit: SubmitHandler<Form> = (formData) => {
    alert(`Thanks ${formData.username}, we will get back to you soon.`);
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1, width: '40%',mx: 'auto' }}>
      <Typography variant="h6">Contact Form</Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        autoComplete="username"
        autoFocus
        {...register('username', { required: 'Username is required' })}
        error={Boolean(errors.username)}
        helperText={errors.username?.message}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        autoComplete="email"
        {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
        error={Boolean(errors.email)}
        helperText={errors.email?.message}
      />
      <TextField
        margin="normal"
        fullWidth
        id="phone"
        label="Phone Number (Optional)"
        autoComplete="tel"
        {...register('phone')}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="feedback"
        label="Feedback"
        autoComplete="off"
        multiline
        rows={4}
        {...register('feedback', { required: 'Feedback is required' })}
        error={Boolean(errors.feedback)}
        helperText={errors.feedback?.message}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default ContactForm;
