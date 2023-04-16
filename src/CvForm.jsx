import React, { useRef, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import CV from "./CvPdf";
import { PDFViewer } from "@react-pdf/renderer";

function CVForm() {
  // variables for form validation
  const { register, control, handleSubmit, reset } = useForm();

  // Ref to store the form data
  const cvData = useRef({});

  //  Feild Array for education section
  const {
    fields: educationalFeilds,
    append: educationalAppend,
    remove: educationalRemove,
  } = useFieldArray({
    control,
    name: "education",
  });

  // Feils Array for experience section
  const {
    fields: experianceFeilds,
    append: experianceAppend,
    remove: experianceRemove,
  } = useFieldArray({
    control,
    name: "experiance",
  });

  // Feils Array for certification section
  const {
    fields: certificationFeilds,
    append: certificationAppend,
    remove: certificationRemove,
  } = useFieldArray({
    control,
    name: "certification",
  });

  // Feils Array for skills section
  const {
    fields: skillFeilds,
    append: skillAppend,
    remove: skillRemove,
  } = useFieldArray({
    control,
    name: "skill",
  });

  // Form Submit function
  const onSubmit = (data) => {
    // store the form data in cvData Ref
    cvData.current = data;
    console.log(cvData.current);

    // reseting form input fields
    reset();
    educationalRemove();
    experianceRemove();
    certificationRemove();
    skillRemove();
  };

  return (
    <div className="flex">
      {/* CV Details form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col px-5 py-7 my-2 text-white bg-[#0e0e0e] w-fit rounded-md"
      >
        <h1 className="mb-2 text-xl">Add your cv details here.</h1>

        {/* Input for name */}
        <input
          type="text"
          placeholder="Name"
          className="px-2 py-3 my-2 bg-black border-2 border-gray-600 rounded-md outline-none focus:border-gray-400 text-while w-96"
          autoComplete="off"
          id="name"
          {...register("name")}
        />

        {/* Input for email */}
        <input
          type="text"
          placeholder="Email"
          className="px-2 py-3 my-2 bg-black border-2 border-gray-600 rounded-md outline-none focus:border-gray-400 text-while w-96"
          autoComplete="off"
          id="email"
          {...register("email")}
        />

        {/* Input for Address */}
        <input
          type="text"
          placeholder="Address"
          className="px-2 py-3 my-2 bg-black border-2 border-gray-600 rounded-md outline-none focus:border-gray-400 text-while w-96"
          autoComplete="off"
          id="address"
          {...register("address")}
        />

        {/* Inpit for contact */}
        <input
          type="text"
          placeholder="Contact Number"
          className="px-2 py-3 my-2 bg-black border-2 border-gray-600 rounded-md outline-none focus:border-gray-400 text-while w-96"
          autoComplete="off"
          id="contact-number"
          {...register("contactNumber")}
        />

        {/* Input for about section */}
        <input
          type="text"
          placeholder="About"
          className="px-2 py-3 my-2 bg-black border-2 border-gray-600 rounded-md outline-none focus:border-gray-400 text-while w-96"
          autoComplete="off"
          id="about"
          {...register("about")}
        />

        {/* Education feilds  */}
        {educationalFeilds.map((field, index) => (
          <div key={field.id} className="flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className="text-gray-500">Education # {index + 1}</h1>
              {/* Cross Button */}
              <button
                type="button"
                onClick={() => educationalRemove(index)}
                className="text-xl text-red-500"
              >
                ✘
              </button>
            </div>
            {/* Institution input */}
            <input
              type="text"
              placeholder="Institution Name"
              className="px-2 py-3 my-2 bg-black border-2 border-gray-600 rounded-md outline-none focus:border-gray-400 text-while w-96"
              autoComplete="off"
              id={`education[${index}].institution`}
              {...register(`education[${index}].institution`)}
            />
            <div className="flex w-96">
              {/* Degree Input */}
              <input
                type="text"
                placeholder="Degree"
                className="w-1/2 px-2 py-3 my-2 mr-1 bg-black border-2 border-gray-600 rounded-md outline-none focus:border-gray-400 text-while"
                autoComplete="off"
                id={`education[${index}].degree`}
                {...register(`education[${index}].degree`)}
              />

              {/* Grades Input */}
              <input
                type="text"
                placeholder="Grades"
                className="w-1/2 px-2 py-3 my-2 ml-1 bg-black border-2 border-gray-600 rounded-md outline-none focus:border-gray-400 text-while"
                autoComplete="off"
                id={`education[${index}].grades`}
                {...register(`education[${index}].grades`)}
              />
            </div>
          </div>
        ))}

        {/* Add education Button */}
        <button
          type="button"
          onClick={() => educationalAppend({})}
          className="px-5 py-2 my-2 text-white bg-black border-2 border-gray-600 rounded-md w-fit hover:bg-neutral-950"
        >
          📒 Add Education
        </button>

        {/* Experiance Feilds */}
        {experianceFeilds.map((field, index) => (
          <div key={field.id} className="flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className="text-gray-500">Experiance # {index + 1}</h1>
              {/* Cross Button */}
              <button
                type="button"
                onClick={() => experianceRemove(index)}
                className="text-xl text-red-500"
              >
                ✘
              </button>
            </div>
            {/* Company Input */}
            <input
              type="text"
              placeholder="Company Name"
              className="px-2 py-3 my-2 bg-black border-2 border-gray-600 rounded-md outline-none focus:border-gray-400 text-while w-96"
              autoComplete="off"
              id={`experiance[${index}].company`}
              {...register(`experiance[${index}].company`)}
            />
            <div className="flex w-96">
              {/* Job Input */}
              <input
                type="text"
                placeholder="Job Title"
                className="w-1/2 px-2 py-3 my-2 mr-1 bg-black border-2 border-gray-600 rounded-md outline-none focus:border-gray-400 text-while"
                autoComplete="off"
                id={`experiance[${index}].jobTitle`}
                {...register(`experiance[${index}].jobTitle`)}
              />
              {/* Duaration Input */}
              <input
                type="text"
                placeholder="Duaration"
                className="w-1/2 px-2 py-3 my-2 ml-1 bg-black border-2 border-gray-600 rounded-md outline-none focus:border-gray-400 text-while"
                autoComplete="off"
                id={`experiance[${index}].duaration`}
                {...register(`experiance[${index}].duaration`)}
              />
            </div>
            {/* Responsiblites Input */}
            <input
              type="text"
              placeholder="Responsiblites "
              className="px-2 py-3 my-2 bg-black border-2 border-gray-600 rounded-md outline-none focus:border-gray-400 text-while w-96"
              autoComplete="off"
              id={`experiance[${index}].responsiblites`}
              {...register(`experiance[${index}].responsiblites`)}
            />
          </div>
        ))}

        {/* Add Experiance Button */}
        <button
          type="button"
          onClick={() => experianceAppend({})}
          className="px-5 py-2 my-2 text-white bg-black border-2 border-gray-600 rounded-md w-fit hover:bg-neutral-950"
        >
          💼 Add Experiance
        </button>

        {/* Certifications Feilds */}
        {certificationFeilds.map((field, index) => (
          <div key={field.id} className="flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className="text-gray-500">Certification # {index + 1}</h1>
              {/* Cross Button */}
              <button
                type="button"
                onClick={() => certificationRemove(index)}
                className="text-xl text-red-500"
              >
                ✘
              </button>
            </div>
            {/* Certification Input */}
            <input
              type="text"
              placeholder="Certification"
              className="px-2 py-3 my-2 bg-black border-2 border-gray-600 rounded-md outline-none focus:border-gray-400 text-while w-96"
              autoComplete="off"
              id={`certification[${index}].name`}
              {...register(`certification[${index}].name`)}
            />
          </div>
        ))}

        {/* Add Certification Button */}
        <button
          type="button"
          onClick={() => certificationAppend({})}
          className="px-5 py-2 my-2 text-white bg-black border-2 border-gray-600 rounded-md w-fit hover:bg-neutral-950"
        >
          🏅 Add Certifications
        </button>

        {/* Skills Feilds */}
        {skillFeilds.map((field, index) => (
          <div key={field.id} className="flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className="text-gray-500">Skill # {index + 1}</h1>
              {/* Cross Button */}
              <button
                type="button"
                onClick={() => skillRemove(index)}
                className="text-xl text-red-500"
              >
                ✘
              </button>
            </div>
            {/* Skill name input */}
            <input
              type="text"
              placeholder="Skill"
              className="px-2 py-3 my-2 bg-black border-2 border-gray-600 rounded-md outline-none focus:border-gray-400 text-while w-96"
              autoComplete="off"
              id={`skill[${index}].name`}
              {...register(`skill[${index}].name`)}
            />
          </div>
        ))}

        {/* Add Skill Button */}
        <button
          type="button"
          onClick={() => skillAppend({})}
          className="px-5 py-2 my-2 text-white bg-black border-2 border-gray-600 rounded-md w-fit hover:bg-neutral-950"
        >
          🎯 Add Skills
        </button>

        {/* Form Submit button */}
        <button
          type="submit"
          className="px-5 py-2 my-2 font-bold text-black bg-white rounded-md w-fit hover:bg-gray-300"
        >
          Save
        </button>
      </form>
      {/* CV  PDF Component */}
      <PDFViewer className="w-screen m-2">
        <CV {...cvData.current} />
      </PDFViewer>
    </div>
  );
}

export default CVForm;
