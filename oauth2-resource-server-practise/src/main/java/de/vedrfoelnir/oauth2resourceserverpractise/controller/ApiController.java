package de.vedrfoelnir.oauth2resourceserverpractise.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class ApiController {

    @GetMapping("/api1/")
    public String index(Principal principal) {
        return "From Resource-1: " + principal.getName();
    }

}
