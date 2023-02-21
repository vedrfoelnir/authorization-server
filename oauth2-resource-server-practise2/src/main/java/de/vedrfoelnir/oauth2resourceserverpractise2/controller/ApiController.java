package de.vedrfoelnir.oauth2resourceserverpractise2.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class ApiController {

    @GetMapping("/api2/")
    public String index(Principal principal) {
        return "From Resource-2: " + principal.getName();
    }
}
