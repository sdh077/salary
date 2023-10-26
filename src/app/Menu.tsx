"use client";

import { useGetMenusQuery } from "@/redux/services/menuApi";
import { decrement, increment, reset } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Menu() {
    const count = useAppSelector((state) => state.counterReducer.value);
    const dispatch = useAppDispatch();

    const { isLoading, isFetching, data, error } = useGetMenusQuery(null);
    return (
        <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
                <h4 style={{ marginBottom: 16 }}>{count}</h4>
                <button onClick={() => dispatch(increment())}>increment</button>
                <button
                    onClick={() => dispatch(decrement())}
                    style={{ marginInline: 16 }}
                >
                    decrement
                </button>
                <button onClick={() => dispatch(reset())}>reset</button>
            </div>

            {error ? (
                <p>Oh no, there was an error</p>
            ) : isLoading || isFetching ? (
                <p></p>
            ) : data ? (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        gap: 20,
                    }}
                >
                    {data.data.map((menu) => (
                        <div
                            key={menu.menuId}
                            style={{ border: "1px solid #ccc", textAlign: "center" }}
                        >
                            <h3>{menu.menuNm}</h3>
                        </div>
                    ))}
                </div>
            ) : null}
        </main>
    );
}