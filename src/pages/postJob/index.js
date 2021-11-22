import React, { useEffect } from "react";
import "./postJob.scss";
import { Input, TextArea, Button } from "components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { postJobSchema } from "./validation";
import Home from "assets/home.svg";
import { Link } from "react-router-dom";
import useService from "helper/useService";
import { toast } from "react-toastify";

export default function PostJob() {
  const [state, postCall] = useService("post");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(postJobSchema),
  });
  const formSubmit = (data) => {
    const payload = {
      title: data.jobTitle,
      description: data.description,
      location: data.location,
    };
    postCall("/jobs", payload);
  };
  useEffect(() => {
    if (state.data) {
      toast.success("Job posted successfully");
      reset();
    }
  }, [state.data]);

  return (
    <>
      <p className="container home posteByYou">
        <img src={Home} alt="home" height="15" style={{ marginRight: "6px" }} />
        <Link to="/postbyyou">Home</Link> {"> Post a Job"}
      </p>
      <form className="postJob" onSubmit={handleSubmit(formSubmit)}>
        <h2>Post a Job</h2>
        <Input
          label="Job Title"
          register={register}
          required
          name="jobTitle"
          placeholder="Enter job title"
          error={errors.jobTitle?.message}
        />
        <TextArea
          label="Description"
          register={register}
          required
          name="description"
          placeholder="Enter job Description"
          error={errors.description?.message}
        />
        <Input
          label="Location"
          register={register}
          required
          name="location"
          placeholder="Enter location"
          error={errors.location?.message}
        />
        <Button type="submit" className="submitButton">
          Post
        </Button>
      </form>
    </>
  );
}
