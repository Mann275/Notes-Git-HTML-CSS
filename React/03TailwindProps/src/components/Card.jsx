import React from "react";

function Card({ name, role = "Team" }) {
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
      <img
        className="size-48 shadow-xl rounded-md"
        alt=""
        src="https://images.unsplash.com/photo-1768797767742-353a378404b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-heading">
          {name}
        </h5>
      </a>
      <p className="mb-3 text-body">{role}</p>
    </div>
  );
}

export default Card;
