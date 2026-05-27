"use client";

import React, { useState } from "react";
import axios from "axios";
import { BackUrl } from "@/lib/utils";
const UploadPage = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const handleUpload = async () => {
        try {
            setError("");
            setResult(null);

            if (!file) {
                setError("Please select an XLSX file");
                return;
            }

            const formData = new FormData();
            formData.append("file", file);

            setLoading(true);

            const res = await axios.post(`${BackUrl}/upload`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setResult(res.data);
        } catch (err) {
            setError(
                err.response?.data?.message || err.message || "Upload failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-neutral-950 px-4">
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">


                <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-black/20 px-4 py-8 text-center transition hover:border-white/40 hover:bg-white/10">
                    <input
                        type="file"
                        accept=".xlsx"
                        className="hidden"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />

                    <div className="mb-3 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                         XLSX File
                    </div>

                    <p className="text-sm text-neutral-400">
                        {file ? file.name : "No file selected"}
                    </p>
                </label>

                <button
                    onClick={handleUpload}
                    disabled={loading}
                    className="mt-5 w-full rounded-xl bg-white px-4 py-3 font-medium text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {loading ? "Uploading..." : "Upload & Count"}
                </button>

                {error && (
                    <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                        {error}
                    </div>
                )}

                {result && (
                    <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-4">
                        <div className="mb-4 flex items-center justify-between">
                            <p className="text-sm text-neutral-400">Total cameras</p>
                            <p className="text-2xl font-semibold text-white">
                                {result.total}
                            </p>
                        </div>

                        <div className="space-y-2">
                            {Object.entries(result.counts || {})
                                .sort(([nameA], [nameB]) => {
                                    const numA = parseInt(nameA);
                                    const numB = parseInt(nameB);

                                    if (isNaN(numA)) return 1;
                                    if (isNaN(numB)) return -1;

                                    return numA - numB;
                                })
                                .map(([name, count], index) => (
                                    <div
                                        key={name}
                                        className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-sm"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs font-medium text-white">
                                                {index + 1}
                                            </span>

                                            <span className="text-neutral-300">{name}</span>
                                        </div>

                                        <span className="font-medium text-white">{count}</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UploadPage;