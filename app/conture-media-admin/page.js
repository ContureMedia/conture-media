import React from "react";
import AdminDashboard from "../components/admindashboad";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Admin = () => {
  return (
    <div className="w-full flex flex-col">
      <AdminDashboard />
      <div className="w-full flex items-center justify-center my-10">
        <Link href="/conture-media-admin/all-blogs">
          <Button>All Blogs</Button>
        </Link>
      </div>
    </div>
  );
};

export default Admin;
