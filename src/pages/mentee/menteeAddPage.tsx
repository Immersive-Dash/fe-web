import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios'
import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';
import { validationSchema } from '../../formik/formik';
const MenteeAddPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!Cookies.get('account')) {
      navigate('/')
    }
  }, [navigate]);

  const getItem: any = Cookies.get('account')

  const formik = useFormik({
    initialValues: {
      name: "",
      nick: "",
      email: "",
      address: "",
      home: "",
      gender: "",
      telegram: "",
      phone: "",
      major: "",
      menteestat: "",
      ename: "",
      institution: "",
      ephone: "",
      status: "interview",
      estatus: "Orang Tua",
      graduate: "",
      class: 1
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values.graduate)
      console.log(values.class)
      const token = JSON.parse(getItem)
      axios.post(`/mentees`, {
        full_name: values.name,
        nick_name: values.nick,
        email: values.email,
        phone: values.phone,
        current_address: values.address,
        home_address: values.home,
        telegram: values.telegram,
        gender: values.gender,
        emergency_name: values.ename,
        emergency_phone: values.ephone,
        emergency_status: values.estatus,
        education_type: values.menteestat,
        major: values.major,
        graduate: values.graduate,
        institution: values.institution,
        status: values.status,
        class_id: values.class
      }, {
        headers: {
          Authorization: `Bearer ${token.token}`
        }
      }).then((response) => {
        if (response.status === 200) {
          toast('Success menambahkan mentee baru')
        }
        navigate('/mentee')
      }).catch((error) => {
        console.log(error.response.data)
        if (error.response.data.code === 500) {
          toast.error("Data Harus Berbeda")
        } else {
          toast.error("Gagal menambahkan Data")
        }
      })
    },
  });
  return (
    <div className="w-full">
      <div className="mx-6 ">
        <h1 className="text-2xl font-semibold py-5">Add Mentee</h1>

        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Name Mentee</label>
                <input
                  className="border rounded-sm px-3 py-2"
                  type="text"
                  name='name'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  placeholder="input Name Mentee"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className='text-red-800 text-sm font-semibold'>{formik.errors.name}*</div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input
                  className=" border rounded-sm px-3 py-2"
                  type="text"
                  name='email'
                  onChange={formik.handleChange}
                  placeholder="input Email"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className='text-red-800 text-sm font-semibold'>{formik.errors.email}*</div>
                ) : null}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Nick Name</label>
                <input
                  className="border rounded-sm px-3 py-2"
                  type="text"
                  name='nick'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  placeholder="input Nick Name"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Address</label>
                <input
                  className="border rounded-sm px-3 py-2"
                  type="text"
                  name='address'
                  onChange={formik.handleChange}
                  placeholder="input Address"
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className='text-red-800 text-sm font-semibold'>{formik.errors.address}*</div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Home Address</label>
                <input
                  className=" border rounded-sm px-3 py-2"
                  type="text"
                  name='home'
                  onChange={formik.handleChange}
                  placeholder="input Home Address"
                />
                {formik.touched.home && formik.errors.home ? (
                  <div className='text-red-800 text-sm font-semibold'>{formik.errors.home}*</div>
                ) : null}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Phone Number</label>
                <input
                  className="border rounded-sm px-3 py-2"
                  type="text"
                  name='phone'
                  onChange={formik.handleChange}
                  placeholder="input Phone Address"
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className='text-red-800 text-sm font-semibold'>{formik.errors.phone}*</div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Telegram</label>
                <input
                  className=" border rounded-sm px-3 py-2"
                  type="text"
                  name='telegram'
                  onChange={formik.handleChange}
                  placeholder="input Username Telegram"
                />
                {formik.touched.telegram && formik.errors.telegram ? (
                  <div className='text-red-800 text-sm font-semibold'>{formik.errors.telegram}*</div>
                ) : null}
              </div>
            </div>

            <label className="font-semibold">Gender</label>
            <div className="flex justify-between w-1/5 items-center">
              <div className="m-2">
                <input onChange={formik.handleChange} checked={formik.values.gender === "L"} name='gender' value='L' className="mr-2" type="radio"></input>
                <label>Male</label>
              </div>
              <div className="m-2">
                <input onChange={formik.handleChange} checked={formik.values.gender === "F"} name='gender' value='F' className="mr-2" type="radio"></input>
                <label>Female</label>
              </div>
            </div>
            {formik.touched.gender && formik.errors.gender ? (
              <div className='text-red-800 text-sm font-semibold'>{formik.errors.gender}*</div>
            ) : null}
            <h3 className="font-bold text-lg">Emergency Contact</h3>
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Phone Number</label>
                <input
                  className=" border rounded-sm px-3 py-2"
                  type="text"
                  name='ephone'
                  onChange={formik.handleChange}
                  placeholder="input Phone Number"
                />
                {formik.touched.ephone && formik.errors.ephone ? (
                  <div className='text-red-800 text-sm font-semibold'>{formik.errors.ephone}*</div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Emergency Name</label>
                <input
                  className=" border rounded-sm px-3 py-2"
                  type="text"
                  name='ename'
                  onChange={formik.handleChange}
                  placeholder="input Emergency name"
                />
                {formik.touched.ename && formik.errors.ename ? (
                  <div className='text-red-800 text-sm font-semibold'>{formik.errors.ename}*</div>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Emergency Status</label>
                <select onChange={formik.handleChange} value={formik.values.estatus} name='estatus' className="px-3 py-2  border rounded-sm">
                  <option value='Orang Tua'>Orang Tua</option>
                  <option value='Saudara'>Saudara</option>
                </select>
              </div>
              {formik.touched.estatus && formik.errors.estatus ? (
                <div className='text-red-800 text-sm font-semibold'>{formik.errors.estatus}*</div>
              ) : null}
            </div>
            <h3 className="font-bold text-lg">Education Data</h3>
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Major</label>
                <input
                  className=" border rounded-sm px-3 py-2"
                  type="education"
                  name='major'
                  onChange={formik.handleChange}
                  placeholder="input Major"
                />
                {formik.touched.major && formik.errors.major ? (
                  <div className='text-red-800 text-sm font-semibold'>{formik.errors.major}*</div>
                ) : null}
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Graduate</label>
                <input
                  className=" border rounded-sm px-3 py-2"
                  type="text"
                  name='graduate'
                  onChange={formik.handleChange}
                  placeholder="input Graduate"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Status</label>
                <select onChange={formik.handleChange} value={formik.values.status} name='status' className="px-3 py-2  border rounded-sm">
                  <option value='interview'>Interview</option>
                  <option value='join class'>Join Class</option>
                  <option value='unit1'>Unit 1</option>
                  <option value='unit2'>Unit 2</option>
                  <option value='unit3'>Unit 3</option>
                  <option value='repeatunit1'>Repeat Unit 1</option>
                  <option value='repeatunit2'>Repeat Unit 2</option>
                  <option value='repeatunit3'>Repeat Unit 3</option>
                  <option value='placement'>Placement</option>
                  <option value='elimination'>Elimination</option>
                  <option value='placement'>Placement</option>
                  <option value='graduate'>Graduate</option>
                </select>
                {formik.touched.status && formik.errors.status ? (
                  <div className='text-red-800 text-sm font-semibold'>{formik.errors.status}*</div>
                ) : null}
              </div>
              <div className='grid grid-cols-2'>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Institution</label>
                  <input
                    className="border rounded-sm px-3 py-2"
                    type="education"
                    name='institution'
                    onChange={formik.handleChange}
                    placeholder="input Institution"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <label className="font-semibold">Type</label>
                <div className="flex justify-between w-80">
                  <div className="m-2">
                    <input onChange={formik.handleChange} checked={formik.values.menteestat === "it"} name='menteestat' value='it' className="mr-2" type="radio"></input>
                    <label>Informatic</label>
                  </div>

                  <div className="m-2">
                    <input onChange={formik.handleChange} checked={formik.values.menteestat === "nonit"} name='menteestat' value='nonit' className="mr-2" type="radio"></input>
                    <label>Non Informatic</label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold">Class</label>
                <select onChange={formik.handleChange} value={formik.values.class} name='class' className="px-3 py-2  border rounded-sm">
                  <option value="">Choose class</option>
                  <option value={1}>Frontend Batch 15</option>
                  <option value={2}>Backend GO Batch 20</option>
                </select>
              </div>
              {formik.touched.estatus && formik.errors.estatus ? (
                <div className='text-red-800 text-sm font-semibold'>{formik.errors.estatus}*</div>
              ) : null}
            </div>
            <div className="flex justify-end p-10 gap-3">
              <button
                type="button"
                className="font-semibold shadow-lg shadow-slate-200 text-white bg-red-500 hover:bg-red-700 rounded-full text-sm px-10 py-3 text-center"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="font-semibold text-white shadow-lg shadow-slate-200 bg-[#3E31DF] hover:bg-[#03034F] rounded-full text-sm px-10 py-3 text-center"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenteeAddPage;
