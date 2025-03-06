import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth, projects }) {
    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Projects</h2>}
        >

            <Head title="Projects" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">Projects</div>

                        <table className="w-full text-white">
                            <thead className="bg-gray-700 uppercase border-b-2">
                                <tr>
                                    <th className="px-3 py-3 border-r">ID</th>
                                    <th className="px-3 py-3 border-r">Image</th>
                                    <th className="px-3 py-3 border-r">Name</th>
                                    <th className="px-3 py-3 border-r">Status</th>
                                    <th className="px-3 py-3 border-r">Created Date</th>
                                    <th className="px-3 py-3 border-r">Due Date</th>
                                    <th className="px-3 py-3 border-r">Created By</th>
                                    <th className="px-3 py-3 border-r">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    projects.data.map((value) => (
                                        <tr className="bg-gray-900">
                                            <td className="text-center px-3 py-3">{value.id}</td>
                                            <td>
                                                <img src={value.image_path} className="w-60" />
                                            </td>
                                            <td>{value.name}</td>
                                            <td>{value.status}</td>
                                            <td className="text-center">{value.created_at}</td>
                                            <td className="text-center">{value.due_date}</td>
                                            <td className="text-center">{value.createdBy.name}</td>
                                            <td>
                                                <Link href="{route('project.edit', value.id)}" className="text-blue-500 mr-8">Edit</Link>
                                                <Link href="{route('project.destroy', value.id)}" className="text-red-500">Delete</Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </Authenticated>
    )
}

