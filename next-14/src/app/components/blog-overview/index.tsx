"use client";

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { ConfirmModal } from "../modal";
import { Card } from "react-bootstrap";
import { useRouter } from "next/navigation";

export interface IBlogProps {
  title: string;
  description: string;
}

const initialBlog: IBlogProps = {
  title: "",
  description: "",
};

function BlogOverView({ blogList }: any) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlog);

  const handleAddNew = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    router.refresh();
  }, []);

  async function handleSaveBlog() {
    setLoading(true);
    try {
      const response = await fetch("/api/add-blog", {
        method: "POST",
        body: JSON.stringify(blogFormData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to save blog");
      }
      setShow(false);
      setLoading(false);
      setBlogFormData(initialBlog);
      router.refresh();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
      setShow(false);
    }
  }

  const handleDeleteBlog = () => {};
  const handleUpdateBlog = () => {};

  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-yellow-500 p-6 relative text-white">
      <h1 className="uppercase font-bold text-center text-3xl">
        Blog OverView
      </h1>
      <div className="flex justify-around items-center">
        <h1 className="text-lg">Blog List section</h1>
        <Button
          onClick={handleAddNew}
          className="px-4 py-2 gap-2 bg-green-500 hover:bg-green-700 text-white rounded-2xl flex items-center">
          ➕ Add
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-5 mx-auto">
        {blogList && blogList.length > 1 ? (
          blogList.map((blog: IBlogProps, index: number) => (
            <Card key={index} className="bg-white p-5 rounded-lg">
              <Card.Body className="flex flex-col items-center text-black">
                <Card.Title className="text-2xl">{blog?.title}</Card.Title>
                <Card.Text className="my-4">{blog?.description}</Card.Text>
                <div className="text-right flex gap-3">
                  <Button
                    onClick={handleDeleteBlog}
                    className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-2xl">
                    Delete
                  </Button>
                  <Button
                    onClick={handleUpdateBlog}
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
        title="Add new blog"
        onOk={handleSaveBlog}
        okText={loading ? "Saving changes" : "Confirm"}
        cancelText="Cancel"
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
      />
    </div>
  );
}

export default BlogOverView;
