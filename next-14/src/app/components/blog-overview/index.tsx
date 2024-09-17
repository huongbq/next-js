"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import { ConfirmModal } from "../modal";
import { Card } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export interface IBlogProps {
  _id?: string;
  title: string;
  description: string;
}

const initialBlog = {
  title: "",
  description: "",
};

interface BlogOverViewProps {
  blogList: IBlogProps[];
}

function BlogOverView({ blogList }: BlogOverViewProps) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState<IBlogProps>(initialBlog);
  const [currentEditBlogId, setCurrentEditBlogId] = useState<string | null>(
    null
  );

  const handleAddNew = () => {
    setShow((prev) => !prev);
    setCurrentEditBlogId(null);
    setBlogFormData(initialBlog);
  };

  async function handleSaveBlog() {
    setLoading(true);
    try {
      const url = currentEditBlogId
        ? `/api/update-blog?id=${currentEditBlogId}`
        : "/api/add-blog";
      const method = currentEditBlogId ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,
        body: JSON.stringify(blogFormData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to save blog");
      }

      setShow(false);
      setLoading(false);
      setBlogFormData(initialBlog);

      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
      setShow(false);
    }
  }

  const handleUpdateBlog = async (getCurrentBlog: IBlogProps) => {
    if (getCurrentBlog) {
      setCurrentEditBlogId(getCurrentBlog?._id || null);
      setBlogFormData({
        title: getCurrentBlog.title,
        description: getCurrentBlog.description,
      });
      setShow(true);
    } else {
      console.error("getCurrentBlog is null or undefined");
    }
  };

  const handleDeleteBlogById = async (id: string | undefined) => {
    if (!id) return;

    try {
      const response = await fetch(`/api/delete-blog?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Blog deleted successfully");
        window.location.reload();
      } else {
        const data = await response.json();
        console.error("Failed to delete blog:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-green-300 to-yellow-300 p-6 relative text-white">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Blog</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="uppercase font-bold text-center text-3xl">
        Blog Overview
      </h1>
      <div className="flex justify-around items-center">
        <h1 className="text-lg">Blog List section</h1>
        <Button
          onClick={() => setShow(true)}
          className="px-4 py-2 gap-2 bg-green-500 hover:bg-green-700 text-white rounded-2xl flex items-center">
          ➕ Add
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-5 mx-auto">
        {blogList && blogList.length > 0 ? (
          blogList.map((blog: IBlogProps) => (
            <Card key={blog?._id} className="bg-white p-5 rounded-lg">
              <Card.Body className="flex flex-col items-center text-black">
                <Card.Title className="text-2xl">{blog?.title}</Card.Title>
                <Card.Text className="my-4">{blog?.description}</Card.Text>
                <div className="text-right flex gap-3">
                  <Button
                    onClick={() => handleDeleteBlogById(blog._id)}
                    className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-2xl">
                    Delete
                  </Button>
                  <Button
                    onClick={() => handleUpdateBlog(blog)}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-2xl">
                    Update
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p className="text-center">No blogs available. 😢</p>
        )}
      </div>
      <ConfirmModal
        onClose={handleAddNew}
        open={show}
        title={currentEditBlogId ? "Update Blog" : "Add New Blog"}
        onOk={handleSaveBlog}
        okText={loading ? "Saving changes" : "Confirm"}
        cancelText="Cancel"
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        setCurrentEditBlogId={setCurrentEditBlogId}
      />
    </div>
  );
}

export default BlogOverView;
