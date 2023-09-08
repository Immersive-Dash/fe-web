import * as yup from 'yup'
export const validationSchema = yup.object({
    name: yup.string().required('Nama Wajib Diisi'),
    email: yup.string().required(`Email Wajib Diisi`),
    address: yup.string().required(`Address Wajib Diisi`),
    home: yup.string().required(`Home Wajib Diisi`),
    gender: yup.string().required(`Gender Wajib Di Pilih`),
    telegram: yup.string().required(`Telegram Wajib Diisi`),
    phone: yup.string().required(`No HP Wajib Diisi`),
    major: yup.string().required(`Major Wajib Diisi`),
    menteestat: yup.string().required(`Status Wajib Diisi`),
    ename: yup.string().required(`Nama Wajib Diisi`),
    institution: yup.string().required(`Institusi Wajib Diisi`),
    ephone: yup.string().required(`No Hp Wajib Diisi`),
    status: yup.string().required(`Status Wajib Diisi`),
    graduate: yup.string().required(`Tanggal Wajib Diisi`)
})