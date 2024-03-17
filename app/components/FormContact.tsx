'use client';

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
  name: string;
  ville: string;
  tel: string;
  typeActivite?: string;
  adresse?: string;
  nomSociete?: string;
  email?: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  ville: yup.string().required(),
  tel: yup.string().required(),
  message: yup.string().required(),
});

export const FormContact: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: IFormInputs) => {
    if (isValid) {
      setIsLoading(true);
      try {
        const response = await fetch("https://www.amsatech.ma/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.status === 200) {
          reset();
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }
  };

  return (
    <form className="w-full py-7 px-3 text-white primary-shadow rounded-lg" onSubmit={handleSubmit(onSubmit)} method="POST">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <label className="block my-1 ml-2">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-semibold ">
            Nom Complet
          </span>
          <input
            type="text"
            {...register("name")}
            className={`mt-1 px-3 py-2 bg-primary-black border ${errors?.name ? 'border-red-500' : 'border-slate-300'
              }  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
          />
          {errors?.name && (
            <p className="text-red-500 text-sm">le nom ne peut pas être vide.</p>
          )}
        </label>
        <label className="block my-1 ml-2">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-semibold ">
            Ville
          </span>
          <input
            type="text"
            {...register("ville")}
            className={`mt-1 px-3 py-2 bg-primary-black border ${errors?.name ? 'border-red-500' : 'border-slate-300'
              }  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
          />
          {errors?.ville && (
            <p className="text-red-500 text-sm">la ville ne peut pas être vide.</p>
          )}
        </label>
        <label className="block my-1 ml-2">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-semibold ">
            Tél
          </span>
          <input
            type="tel"
            {...register("tel")}
            className={`mt-1 px-3 py-2 bg-primary-black border ${errors?.name ? 'border-red-500' : 'border-slate-300'
              }  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
          />
          {errors?.tel && (
            <p className="text-red-500 text-sm">le Tél ne peut pas être vide.</p>
          )}
        </label>
        <label className="block my-1 ml-2">
          <span className="block text-sm font-semibold ">Email</span>
          <input
            type="email"
            {...register("email")}
            className={`mt-1 px-3 py-2 bg-primary-black border  border-slate-300 placeholder-slate-400 focus:outline-none focus-border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
          />
          {errors.email?.type === "email" && <p className="text-red-500 text-xs italic">Email invalide</p>}
        </label>
        <label className="block my-1 ml-2">
          <span className="block text-sm font-semibold ">Type d’activité</span>
          <input
            type="text"
            {...register("typeActivite")}
            className={`mt-1 px-3 py-2 bg-primary-black border  border-slate-300 placeholder-slate-400 focus:outline-none focus-border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
          />
        </label>
        <label className="block my-1 ml-2">
          <span className="block text-sm font-semibold ">Nom de Société</span>
          <input
            type="text"
            {...register("nomSociete")}
            className={`mt-1 px-3 py-2 bg-primary-black border  border-slate-300 placeholder-slate-400 focus:outline-none focus-border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
          />
        </label>
      </div>
      <label className="block my-1 ml-2">
        <span className="block text-sm font-semibold ">Adresse</span>
        <input
          type="text"
          {...register("adresse")}
          className={`mt-1 px-3 py-2 bg-primary-black border  border-slate-300 placeholder-slate-400 focus:outline-none focus-border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
        />
      </label>
      <label className="block my-1 ml-2">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-semibold ">
          Message
        </span>
        <textarea
          {...register("message")}
          rows={4}
          className={`mt-1 px-3 py-2  bg-primary-black border ${errors?.message ? 'border-red-500' : 'border-slate-300'
            }  placeholder-slate-400 focus:outline-none focus-border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
        />
        {errors?.message && (
          <p className="text-red-500 text-sm">le message ne peut pas être vide.</p>
        )}
      </label>
      <div>
        <button
          type="submit"
          className="relative w-full mt-3 py-2 px-8  text-base font-bold uppercase overflow-hidden text-white bg-primary-black transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover: hover:shadow-md active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-primary-color before:transition-all before:duration-500 before:ease-in-out before:z-[-1] hover:before:left-0"
        >
          {isLoading ? <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
              className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
          </div> : 'Envoyer'}
        </button>
      </div>
    </form>
  );
};
