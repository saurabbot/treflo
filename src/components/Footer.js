import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gray-100 text-lg">
        <div class="container mx-auto px-6 pt-10 pb-6">
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">Links</h5>
            <ul class="mb-4">
                <li class="mt-2">
                <a href="/" class="text-lg hover:underline text-gray-400 hover:text-orange-500">FAQ</a>
                </li>
                <li class="mt-2">
                <a href="/" class="text-lg hover:underline text-gray-600 hover:text-orange-500">Help</a>
                </li>
                <li class="mt-2">
                <a href="/" class="text-lg hover:underline text-gray-600 hover:text-orange-500">Support</a>
                </li>
            </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">Legal</h5>
            <ul class="mb-4">
                <li class="mt-2">
                <a href="/" class="text-lg hover:underline text-gray-600 hover:text-orange-500">Terms</a>
                </li>
                <li class="mt-2">
                <a href="/" class="text-lg hover:underline text-gray-600 hover:text-orange-500">Privacy</a>
                </li>
            </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">Social</h5>
            <ul class="mb-4">
                <li class="mt-2">
                <a href="/" class="text-lg hover:underline text-gray-600 hover:text-orange-500">Facebook</a>
                </li>
                <li class="mt-2">
                <a href="/" class="text-lg hover:underline text-gray-600 hover:text-orange-500">Linkedin</a>
                </li>
                <li class="mt-2">
                <a href="/" class="text-lg hover:underline text-gray-600 hover:text-orange-500">Twitter</a>
                </li>
            </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">Company</h5>
            <ul class="mb-4">
                <li class="mt-2">
                <a href="/" class="text-lg hover:underline text-gray-600 hover:text-orange-500">Official Blog</a>
                </li>
                <li class="mt-2">
                <a href="/" class="text-lg hover:underline text-gray-600 hover:text-orange-500">About Us</a>
                </li>
                <li class="mt-2">
                <a href="/" class="text-lg hover:underline text-gray-600 hover:text-orange-500">Contact</a>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </footer>

  )
}

export default Footer