"use client";

import React from "react";
import { CameraStatusChart } from "./Chart";
import { DistrictStatus } from "./DistrictStatus";
import { useCameraDaily } from "@/hooks/useCameraDaily";

const Graph = () => {
    const {
        range,
        setRange,
        chartData,
        districts,
        districtsDate,
        loading,
        error,
    } = useCameraDaily("30");

    return (
        <div className="min-h-screen px-4 pb-16 pt-10 sm:px-6 md:pb-24 lg:pb-32 lg:pt-32" id="district-graph">
            <div className="relative mx-auto grid max-w-6xl items-start gap-6 lg:grid-cols-2">
                <CameraStatusChart
                    range={range}
                    setRange={setRange}
                    chartData={chartData}
                    loading={loading}
                    error={error}
                />

                <DistrictStatus
                    districts={districts}
                    districtsDate={districtsDate}
                />
            </div>
        </div>
    );
};

export default Graph;