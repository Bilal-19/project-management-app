import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <nav class="text-center mt-4 text-white">
            {
                links.map((val) =>
                (
                    <Link dangerouslySetInnerHTML={{ __html: val.label }}></Link>
                )
                )
            }
        </nav>
    )
}
