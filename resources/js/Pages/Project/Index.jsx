import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { PROJECT_STATUS_TEXT_MAP, PROJECT_STATUS_CLASS_MAP } from "../Constant";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";

export default function Index({ auth, projects, queryParams = null }) {
    queryParams = queryParams || {}
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value
        } else {
            delete queryParams[name]
        }

        router.get(route('project.index'), queryParams)
    }

    const onKeyPress = (name, e) => {
        if (e.key !== 'Enter') return;

        searchFieldChanged(name, e.target.value)
    }

    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === 'asc') {
                queryParams.sort_direction = 'desc'
            } else {
                queryParams.sort_direction = 'asc'
            }
        } else {
            queryParams.sort_field = name
            queryParams.sort_direction = 'asc'
        }
        router.get(route('project.index'), queryParams)
    }
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

                        <div class="overflow-auto">
                            <table className="w-full text-white">
                                <thead className="bg-gray-700 uppercase">
                                    <tr className="text-nowrap">
                                        <th onClick={e => sortChanged('id')} className="px-3 py-3 border-r">ID</th>
                                        <th className="px-3 py-3 border-r">Image</th>
                                        <th onClick={e => sortChanged('name')} className="px-3 py-3 border-r">Name</th>
                                        <th onClick={e => sortChanged('status')} className="px-3 py-3 border-r">Status</th>
                                        <th onClick={e => sortChanged('created_at')} className="px-3 py-3 border-r">Created Date</th>
                                        <th onClick={e => sortChanged('due_date')} className="px-3 py-3 border-r">Due Date</th>
                                        <th className="px-3 py-3 border-r">Created By</th>
                                        <th className="px-3 py-3 border-r">Actions</th>
                                    </tr>
                                </thead>
                                <thead className="bg-gray-700 uppercase border-b-2">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-3 border-r"></th>
                                        <th className="px-3 py-3 border-r"></th>
                                        <th className="px-3 py-3 border-r">
                                            <TextInput
                                                className="w-full"
                                                placeholder="Project Name"
                                                onBlur={e => searchFieldChanged('name', e.target.value)}
                                                onKeyPress={e => onKeyPress('name', e)}
                                                defaultValue={queryParams.name}
                                            />
                                        </th>
                                        <th className="px-3 py-3 border-r">
                                            <SelectInput
                                                className="w-full"
                                                defaultValue={queryParams.status}
                                                onChange={e => searchFieldChanged('status', e.target.value)}
                                            >
                                                <option value="">Select Status</option>
                                                <option value="pending">Pending</option>
                                                <option value="in_progress">In Progress</option>
                                                <option value="completed">Completed</option>
                                            </SelectInput>
                                        </th>
                                        <th className="px-3 py-3 border-r"></th>
                                        <th className="px-3 py-3 border-r"></th>
                                        <th className="px-3 py-3 border-r"></th>
                                        <th className="px-3 py-3 border-r"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        projects.data.map((value) => (
                                            <tr className="bg-gray-900 border-b" key={value.id}>
                                                <td className="text-center px-3 py-3">{value.id}</td>
                                                <td>
                                                    <img src={value.image_path} className="w-60" />
                                                </td>
                                                <td>{value.name}</td>
                                                <td className="px-3 py-3">
                                                    <span
                                                        className={"px-2 py-1 rounded text-white " + PROJECT_STATUS_CLASS_MAP[value.status]}>
                                                        {PROJECT_STATUS_TEXT_MAP[value.status]}
                                                    </span>
                                                </td>
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
                        <Pagination links={projects.meta.links} />
                    </div>
                </div>
            </div>

        </Authenticated>
    )
}

