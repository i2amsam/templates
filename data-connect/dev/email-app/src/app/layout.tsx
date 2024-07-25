/*
  Copyright 2024 Google LLC
  
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.  
  
  You may obtain a copy of the License at
  
   https://www.apache.org/licenses/LICENSE-2.0
  
  Unless required by applicable law or agreed to in writing, software
  distributed  
  under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing  
  permissions and
  limitations under the License.
*/
import type {Metadata} from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
	title: "Email App",
	description: "A demo of Firebase Data Connect",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Data Connect Email App</title>
        <link rel="icon" href="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/favicon.ico" />
      </head>
			<body className="flex flex-col items-center justify-center p-12 gap-12">
				{/* I/O Header */}
				<header className="flex items-center gap-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						className="w-48 flex-shrink-0 opacity-10"
						viewBox="0 0 717 157"
					>
						<path
							fill="#202124"
							d="M0 66.162C0 34.436 26.614 8.597 58.398 8.597a54.796 54.796 0 0 1 39.46 15.859L86.714 35.552a40.054 40.054 0 0 0-28.31-11.228c-23.149 0-41.244 18.64-41.244 41.838s18.061 41.829 41.244 41.829c15.015 0 23.563-6.033 29.046-11.516 4.493-4.498 7.432-10.965 8.563-19.742H58.407v-15.77h52.896c.6 3.255.882 6.559.843 9.868 0 11.789-3.221 26.385-13.611 36.78-10.127 10.483-23.037 16.043-40.128 16.043C26.614 123.659 0 97.888 0 66.162Zm154.848 42.945c-11.223 0-20.902-9.264-20.902-22.457 0-13.192 9.679-22.461 20.902-22.461 11.224 0 20.903 9.123 20.903 22.461 0 13.339-9.679 22.472-20.903 22.472v-.01m0-59.514c-20.483 0-37.174 15.585-37.174 37.057 0 21.473 16.691 37.014 37.174 37.014s37.18-15.727 37.18-37.058c0-21.33-16.692-37.013-37.18-37.013Zm81.104 59.509c-11.223 0-20.902-9.264-20.902-22.457 0-13.192 9.679-22.461 20.902-22.461 11.224 0 20.903 9.123 20.903 22.461 0 13.339-9.679 22.472-20.903 22.472v-.01m0-59.514c-20.483 0-37.179 15.585-37.179 37.057 0 21.473 16.691 37.014 37.179 37.014 20.488 0 37.175-15.727 37.175-37.058 0-21.33-16.692-37.013-37.175-37.013Zm142.49-37.063h-16.277v108.931h16.277V12.536Z"
						/>
						<path
							fill="#202124"
							d="M378.442 12.535h-16.277v108.931h16.277V12.536Zm43.354 51.381c6.457 0 11.925 3.226 13.743 7.86l-33.11 13.754c-.429-14.323 11.082-21.614 19.357-21.614h.01Zm1.262 45.206c-8.275 0-14.172-3.797-17.954-11.228l49.529-20.498-1.667-4.177c-3.09-8.28-12.486-23.577-31.707-23.577-19.22 0-34.932 15.024-34.932 37.057 0 20.771 15.717 37.058 36.76 37.058a36.83 36.83 0 0 0 30.863-16.448l-12.627-8.421c-4.24 6.14-9.995 10.244-18.27 10.244l.005-.01Zm-106.182-.005c-11.224 0-20.63-9.41-20.63-22.316 0-12.904 9.406-22.603 20.63-22.603 11.223 0 19.727 9.543 19.727 22.603 0 13.061-8.669 22.316-19.752 22.316h.025Zm18.631-57.278v6.02h-.561c-3.65-4.387-10.663-8.28-19.498-8.28-18.524 0-35.498 16.286-35.498 37.198s16.979 36.882 35.498 36.882c8.835 0 15.848-3.928 19.498-8.421h.561v5.331c0 14.177-7.573 21.755-19.728 21.755-9.961 0-16.131-7.159-18.631-13.158l-14.172 5.902c5.458 13.339 18.475 22.023 32.881 21.93 19.08 0 35.216-11.228 35.216-38.602V51.839h-15.566Zm222.418-39.464h-54.933v109.258h54.933V12.375Zm101.889 110.988c31.127 0 56.361-25.234 56.361-56.361 0-31.128-25.234-56.361-56.361-56.361-31.128 0-56.361 25.233-56.361 56.36 0 31.128 25.233 56.362 56.361 56.362Zm-83.877 9.902h-10.59L595.484.737h10.59l-30.137 132.528Z"
						/>
					</svg>
					<h1 className="title font-medium opacity-20">Email App Demo</h1>
				</header>

				{/* Main container */}
				<div className="w-full max-w-screen-lg">
					{/* Window */}
					<div className="relative h-[600px] bg-white rounded-lg shadow-2xl grid grid-cols-3 overflow-hidden">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
