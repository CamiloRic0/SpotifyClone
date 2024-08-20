"use client";

import Modal from "@/components/Modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    //not to render in server
    if (!isMounted) {
        return null;
    }

    return (
        <>
            <Modal
                title="Test Modal"
                description="Test Description"
                isOpen
                onChange={() => { }}
            >
                Test children
            </Modal>

        </>
    );
}

export default ModalProvider;