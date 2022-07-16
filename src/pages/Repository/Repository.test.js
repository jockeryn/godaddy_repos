import { render, screen, cleanup } from '@testing-library/react'
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import Repository from './Repository'

afterEach(() => {
    cleanup();
})

const repos = [{
    "id": 4967118,
    "name": "gdapi-php",
    "full_name": "godaddy/gdapi-php",
    "owner": {
      "login": "godaddy",
      "id": 1406546,
      "avatar_url": "https://avatars.githubusercontent.com/u/1406546?v=4",
      "url": "https://api.github.com/users/godaddy",
      "html_url": "https://github.com/godaddy",
    },
    "html_url": "https://github.com/godaddy/gdapi-php",
    "description": "A PHP client for Go Daddy® REST APIs",
    "url": "https://api.github.com/repos/godaddy/gdapi-php",
    "created_at": "2012-07-10T00:55:55Z",
    "updated_at": "2021-04-15T19:33:18Z",
    "pushed_at": "2014-02-18T00:28:39Z",
    "git_url": "git://github.com/godaddy/gdapi-php.git",
    "ssh_url": "git@github.com:godaddy/gdapi-php.git",
    "clone_url": "https://github.com/godaddy/gdapi-php.git",
    "svn_url": "https://github.com/godaddy/gdapi-php",
    "homepage": "",
    "size": 323,
    "stargazers_count": 30,
    "watchers_count": 30,
    "language": "PHP",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 16,
    "mirror_url": null,
    "archived": true,
    "disabled": false,
    "open_issues_count": 2,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [],
    "visibility": "public",
    "forks": 16,
    "open_issues": 2,
    "watchers": 30,
    "default_branch": "master",
    "permissions": {
      "admin": false,
      "maintain": false,
      "push": false,
      "triage": false,
      "pull": true
    }
  }]

test('Sholud render repository', () => {
    render(
        <MemoryRouter initialEntries={['/repository/godaddy%2Fgdapi-php']}>
            <Routes>
                <Route path="/repository/:repoName" element={<Repository repos={repos}/>} />
            </Routes>
        </MemoryRouter>
    )
    const RepoPage = screen.getByTestId('repository-page')
    expect(RepoPage).toBeInTheDocument();
})