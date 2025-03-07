import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <nav class="text-center mt-4 text-white">
            {
                links.map((val) =>
                (
                    <Link
                        preserveScroll
                        href={val.url || ""}
                        key={val.label}
                        className={
                            "inline-block text-gray-200 text-lg px-2 py-2 rounded-lg "
                            + (val.active ? "bg-gray-950 " : "") +
                            (!val.url ? "!text-gray-500 cursor-not-allowed " : "hover:bg-gray-950")
                        }
                        dangerouslySetInnerHTML={{ __html: val.label }}
                    ></Link>
                )
                )
            }
        </nav>
    )
}
