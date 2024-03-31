import React from "react";
import "./Home.css";
import "./Profile.js";
import "./Chome.js";

export default function Profile() {
  return (
    <div class="bg-gray-800 bg-opacity-50 overflow-hidden shadow ">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-white">
          User Profile
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-white">
          This is some information about you.
        </p>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-white">
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-white">Full name</dt>
            <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
              John Doe
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-white">Email address</dt>
            <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
              johndoe@example.com
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-white">Vehicle Number</dt>
            <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
            bbn2310
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-white">Vehicle Type</dt>
            <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
              Car
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-white">Phone number</dt>
            <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
              (123) 456-7890
            </dd>
          </div>
        </dl>
      </div>
      `
      <div class="flex gap-3 max-w-sm">
        <button class="py-2.5 px-6 rounded-lg text-sm font-medium bg-red-200 text-teal-800">
          Edit
        </button>
        <button class="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-red-600">
          Delete Account
        </button>
      </div>
      `
    </div>
  );
}
