<?php
include "./classes/db.php";
include "./classes/department.php";

$departments = $dept->get_departments();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Departments</title>

    <!-- Tailwind CDN -->
    <script src="https://cdn.tailwindcss.com"></script>

    <style>
        body {
            background-color: #f9fafb;
        }
    </style>
</head>

<body class="text-gray-800">

<div class="max-w-5xl mx-auto px-4 py-10">

    <!-- Header -->
    <div class="mb-8">
        <h3 class="text-3xl font-bold text-gray-900">
            Departments
        </h3>
        <p class="text-gray-500">Manage your company departments</p>
    </div>

    <!-- Form Card -->
    <div class="bg-white shadow-md rounded-2xl p-6 border border-gray-200 mb-8">
        <form action="./scripts/dep_create.php" method="post" class="flex flex-col md:flex-row gap-4">

            <input 
                type="text" 
                name="dep_name"
                placeholder="Enter department name"
                class="w-full md:flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >

            <select 
                name="status"
                class="w-full md:w-48 px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>

            <button 
                class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
                Save
            </button>

        </form>
    </div>

    <!-- Table Card -->
    <div class="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200">

        <table class="w-full text-left">
            <thead class="bg-gray-900 text-white">
                <tr>
                    <th class="p-4">Id</th>
                    <th class="p-4">Name</th>
                    <th class="p-4">Status</th>
                    <th class="p-4">Actions</th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
                <?php foreach($departments as $dept) { ?>
                    <tr class="hover:bg-gray-50 transition">
                        <td class="p-4 font-medium">
                            <?php echo $dept['id'] ?>
                        </td>

                        <td class="p-4">
                            <?php echo $dept['name'] ?>
                        </td>

                        <td class="p-4">
                            <?php if($dept['status'] == 'active') { ?>
                                <span class="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                                    Active
                                </span>
                            <?php } else { ?>
                                <span class="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700">
                                    Inactive
                                </span>
                            <?php } ?>
                        </td>

                        <td class="p-4 space-x-3">
                            <a href="#" class="text-blue-600 hover:underline">Edit</a>
                            <a href="#" onclick="handleDelete(<?php echo $dept['id']?>)"
                               class="text-red-500 hover:underline">
                               Delete
                            </a>
                        </td>
                    </tr>
                <?php } ?>
            </tbody>

        </table>

    </div>

</div>

<!-- js -->
<script>
    function handleDelete(id){
        if(!confirm("Are you sure your want to delete this?")) return;
        window.location.href = "./scripts/dep_del.php?id=" + id;
    }
</script>

</body>
</html>